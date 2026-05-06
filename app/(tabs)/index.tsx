import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Bell,
  ChevronDown,
  ChevronUp,
  Menu,
  Mic,
  Send,
  User,
  X,
} from 'lucide-react-native';

import HeartRateWidget from '../HeartRateWidget';

export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCitas, setShowCitas] = useState(false);
  const [showChats, setShowChats] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: 340,
          height: 700,
          backgroundColor: 'white',
          borderRadius: 24,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 8,
        }}
      >

        {/* HEADER */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#E5E7EB',
          }}
        >

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >

            {/* AVATAR */}
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                backgroundColor: '#60A5FA',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <User color="white" size={16} />
            </View>

            {/* MENU BUTTON */}
            <TouchableOpacity
              onPress={() => setMenuOpen(!menuOpen)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                backgroundColor: '#3B82F6',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {menuOpen ? (
                <X color="white" size={18} />
              ) : (
                <Menu color="white" size={18} />
              )}
            </TouchableOpacity>
          </View>

          {/* TITLE */}
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#1F2937',
              letterSpacing: 1,
            }}
          >
            MAGZIA
          </Text>

          {/* NOTIFICATION */}
          <View style={{ position: 'relative' }}>
            <Bell fill="#EAB308" color="#EAB308" size={22} />

            <View
              style={{
                position: 'absolute',
                top: -4,
                right: -4,
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: '#EF4444',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 9,
                  fontWeight: 'bold',
                }}
              >
                2
              </Text>
            </View>
          </View>
        </View>

        {/* OVERLAY */}
        {menuOpen && (
          <Pressable
            onPress={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.3)',
              zIndex: 10,
            }}
          />
        )}

        {/* SIDEBAR */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: menuOpen ? 0 : -260,
            width: 256,
            height: '100%',
            backgroundColor: 'white',
            zIndex: 20,
            paddingHorizontal: 16,
            paddingTop: 32,
          }}
        >

          {/* PROFILE */}
          <View
            style={{
              paddingBottom: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#E5E7EB',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}
            >

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  backgroundColor: '#60A5FA',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <User color="white" size={18} />
              </View>

              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#1F2937',
                  }}
                >
                  Mariana
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: '#6B7280',
                  }}
                >
                  Ver perfil
                </Text>
              </View>
            </View>
          </View>

          {/* BUTTONS */}
          <View
            style={{
              marginTop: 24,
              gap: 12,
            }}
          >

            <TouchableOpacity
              style={{
                backgroundColor: '#3B82F6',
                paddingVertical: 12,
                borderRadius: 999,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}
              >
                PERFIL
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#6366F1',
                paddingVertical: 12,
                borderRadius: 999,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}
              >
                CONFIGURACIÓN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#A78BFA',
                paddingVertical: 12,
                borderRadius: 999,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}
              >
                NOTAS
              </Text>
            </TouchableOpacity>
          </View>

          {/* EXPANDABLES */}
          <View
            style={{
              marginTop: 24,
              gap: 12,
            }}
          >

            <TouchableOpacity
              onPress={() => setShowCitas(!showCitas)}
              style={{
                backgroundColor: '#F3F4F6',
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#1F2937',
                  letterSpacing: 1,
                }}
              >
                HISTORIAL DE CITAS
              </Text>

              {showCitas ? (
                <ChevronUp size={16} color="#1F2937" />
              ) : (
                <ChevronDown size={16} color="#1F2937" />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setShowChats(!showChats)}
              style={{
                backgroundColor: '#F3F4F6',
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#1F2937',
                  letterSpacing: 1,
                }}
              >
                HISTORIAL DE CHATS
              </Text>

              {showChats ? (
                <ChevronUp size={16} color="#1F2937" />
              ) : (
                <ChevronDown size={16} color="#1F2937" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* MAIN CONTENT */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 24,
            }}
          >

            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#1F2937',
              }}
            >
              Hola Mariana
            </Text>

            <Text
              style={{
                fontSize: 18,
                color: '#6B7280',
                marginTop: 12,
              }}
            >
              ¿Cómo te sientes hoy?
            </Text>

            <HeartRateWidget />
          </View>
        </ScrollView>

        {/* CHAT BAR */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: '#E5E7EB',
          }}
        >

          <View
            style={{
              backgroundColor: '#F9FAFB',
              borderWidth: 1,
              borderColor: '#E5E7EB',
              borderRadius: 999,
              paddingHorizontal: 12,
              paddingVertical: 12,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >

            {/* MIC */}
            <TouchableOpacity
              style={{
                width: 36,
                height: 36,
                borderRadius: 999,
                backgroundColor: '#6366F1',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Mic color="white" size={16} />
            </TouchableOpacity>

            {/* INPUT */}
            <TextInput
              placeholder="describe aquí"
              placeholderTextColor="#6B7280"
              style={{
                flex: 1,
                fontSize: 14,
                paddingHorizontal: 12,
              }}
            />

            {/* SEND */}
            <TouchableOpacity
              style={{
                width: 36,
                height: 36,
                borderRadius: 999,
                backgroundColor: '#3B82F6',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Send color="white" size={16} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}