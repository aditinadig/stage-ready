import { View, Text, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';

export default function SingerScreen() {
  const [assignment, setAssignment] = useState(null);
  const [songData, setSongData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAssignment = onSnapshot(
      doc(db, 'songs', 'stand-by-me', 'assignments', 'maria'),
      (doc) => {
        if (doc.exists()) {
          setAssignment(doc.data());
        }
      }
    );

    const unsubscribeSong = onSnapshot(
      doc(db, 'songs', 'stand-by-me'),
      (doc) => {
        if (doc.exists()) {
          setSongData(doc.data());
        }
        setLoading(false);
      }
    );

    return () => {
      unsubscribeAssignment();
      unsubscribeSong();
    };
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg text-gray-600">Loading...</Text>
      </View>
    );
  }

  const myLines = assignment?.assignedLines || [];
  const myName = assignment?.name || 'You';
  const allLines = songData?.lines || [];

  // Group consecutive lines together
  const groupLines = () => {
    const groups = [];
    let currentGroup = null;

    allLines.forEach((lineText, index) => {
      const isMyLine = myLines.includes(index);
      
      if (!currentGroup) {
        currentGroup = {
          isMine: isMyLine,
          lines: [{ index, text: lineText }],
          startIndex: index,
          endIndex: index
        };
      } else if (currentGroup.isMine === isMyLine) {
        currentGroup.lines.push({ index, text: lineText });
        currentGroup.endIndex = index;
      } else {
        groups.push(currentGroup);
        currentGroup = {
          isMine: isMyLine,
          lines: [{ index, text: lineText }],
          startIndex: index,
          endIndex: index
        };
      }
    });

    if (currentGroup) {
      groups.push(currentGroup);
    }

    return groups;
  };

  const lineGroups = groupLines();

  const renderGroup = (group, groupIndex) => {
    const { isMine, lines, startIndex, endIndex } = group;

    let headerColor, bgColor, borderColor, textColor;
    
    if (isMine) {
      headerColor = 'bg-green-500';
      bgColor = 'bg-green-50';
      borderColor = 'border-green-500';
      textColor = 'text-gray-900';
    } else {
      headerColor = 'bg-gray-400';
      bgColor = 'bg-white';
      borderColor = 'border-gray-300';
      textColor = 'text-gray-400';
    }

    const headerLabel = isMine 
      ? `Lines ${startIndex + 1}-${endIndex + 1} - ${myName}`
      : `Lines ${startIndex + 1}-${endIndex + 1} - Other Singer`;

    return (
      <View key={groupIndex} className="mb-4">
        <View className={`${headerColor} px-4 py-2`}>
          <Text className="text-white text-sm font-bold">
            {headerLabel}
          </Text>
        </View>
        
        <View className={`${bgColor} px-4 py-3 border-l-4 ${borderColor}`}>
          {lines.map((line, lineIndex) => (
            <Text 
              key={lineIndex} 
              className={`text-base leading-7 ${textColor}`}
            >
              {line.text}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  const getNextCue = () => {
    if (myLines.length === 0) return "No parts assigned";
    
    const firstMyLine = Math.min(...myLines);
    if (firstMyLine > 0) {
      const previousLine = allLines[firstMyLine - 1];
      return previousLine ? `Enter after "${previousLine}"` : "Start of song";
    }
    return "Start of song";
  };

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="bg-indigo-600 px-4 pt-12 pb-4">
        <Text className="text-3xl font-bold text-white">
          {songData?.title || 'Loading...'}
        </Text>
        <Text className="text-indigo-200 text-lg mt-1">
          Singer: {myName}
        </Text>
      </View>

      <View className="bg-white mx-4 mt-4 p-4 rounded-lg border-l-4 border-yellow-500">
        <Text className="text-xs font-bold text-yellow-800 mb-1">
          NEXT CUE
        </Text>
        <Text className="text-gray-800 text-sm">
          {getNextCue()}
        </Text>
      </View>

      <View className="p-4">
        {lineGroups.map((group, index) => renderGroup(group, index))}
      </View>
    </ScrollView>
  );
}