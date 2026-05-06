import React from 'react';
import { Text, View } from 'react-native';

export default function HeartRateWidget() {
  return (
    <View style={{ alignItems: 'center', marginTop: 32 }}>
      <Text
        style={{
          fontSize: 10,
          textTransform: 'uppercase',
          color: '#6B7280',
          letterSpacing: 2,
        }}
      >
        TU FRECUENCIA
      </Text>

      <Text
        style={{
          fontSize: 10,
          textTransform: 'uppercase',
          color: '#6B7280',
          letterSpacing: 2,
          marginBottom: 16,
        }}
      >
        CARDÍACA ES:
      </Text>

      <View
        style={{
          width: 96,
          height: 96,
          borderRadius: 999,
          borderWidth: 4,
          borderColor: '#E5E7EB',
          borderTopColor: '#3B82F6',
          borderRightColor: '#60A5FA',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
<Text style={{ fontSize: 24 }}>❤️</Text>        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#1F2937',
            marginTop: 4,
          }}
        >
          85
        </Text>

        <Text
          style={{
            fontSize: 12,
            color: '#6B7280',
          }}
        >
          bpm
        </Text>
      </View>
    </View>
  );
}