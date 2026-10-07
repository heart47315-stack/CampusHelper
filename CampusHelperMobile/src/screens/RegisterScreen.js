import React, { useState } from 'react';

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import AppButton from '../components/AppButton';
import theme from '../constants/theme';
import { isSupabaseConfigured, supabase } from '../services/supabase';

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [university, setUniversity] = useState('');
  const [faculty, setFaculty] = useState('');
  const [major, setMajor] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async () => {
    if (!isSupabaseConfigured || !supabase) {
      Alert.alert(
        'ตั้งค่า Supabase ไม่ครบ',
        'เพิ่ม EXPO_PUBLIC_SUPABASE_URL และ EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY ในไฟล์ .env แล้วค่อยรีสตาร์แอปเปิลlication.'
      );
      return;
    }

    if (
      !fullName.trim() ||
      !studentId.trim() ||
      !university.trim() ||
      !faculty.trim() ||
      !major.trim() ||
      !year.trim() ||
      !email.trim() ||
      !password
    ) {
      Alert.alert(
        'ข้อมูลไม่ครบ',
        'กรุณากรอกข้อมูลให้ครบทุกช่อง'
      );
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        'รหัสผ่านสั้นเกินไป',
        'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'
      );
      return;
    }

    const yearNumber = Number(year);

    if (
      !Number.isInteger(yearNumber) ||
      yearNumber < 1 ||
      yearNumber > 10
    ) {
      Alert.alert(
        'ชั้นปีไม่ถูกต้อง',
        'กรุณากรอกชั้นปีเป็นตัวเลข เช่น 1, 2, 3, 4'
      );
      return;
    }

    try {
      setLoading(true);

      const cleanEmail = email.trim().toLowerCase();

      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            student_id: studentId.trim(),
            university: university.trim(),
            faculty: faculty.trim(),
            major: major.trim(),
            year: String(yearNumber),
          },
        },
      });

      if (error) {
        throw error;
      }

      if (!data.user) {
        throw new Error('ไม่สามารถสร้างบัญชีได้');
      }

      if (data.session) {
        Alert.alert(
          'สมัครสมาชิกสำเร็จ 🎉',
          'สร้างบัญชีและบันทึกข้อมูลเรียบร้อยแล้ว',
          [
            {
              text: 'เข้าสู่ระบบ',
              onPress: () => navigation.replace('Main'),
            },
          ]
        );
      } else {
        Alert.alert(
          'สมัครสมาชิกสำเร็จ 🎉',
          'กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชีก่อนเข้าสู่ระบบ',
          [
            {
              text: 'กลับไป Login',
              onPress: () => navigation.replace('Login'),
            },
          ]
        );
      }
    } catch (error) {
      console.error('Register error:', error);

      Alert.alert(
        'สมัครสมาชิกไม่สำเร็จ',
        error?.message || 'เกิดข้อผิดพลาด กรุณาลองใหม่'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.logo}>✦</Text>

        <Text style={styles.title}>Create account</Text>

        <Text style={styles.subtitle}>
          สร้างบัญชี Campus Helper ของคุณ 🌷
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>ชื่อ-นามสกุล</Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="เช่น จุฑามาศ อนุมาตร์"
            style={styles.input}
          />

          <Text style={styles.label}>รหัสนักศึกษา</Text>
          <TextInput
            value={studentId}
            onChangeText={setStudentId}
            placeholder="เช่น 6612345678"
            keyboardType="number-pad"
            style={styles.input}
          />

          <Text style={styles.label}>มหาวิทยาลัย</Text>
          <TextInput
            value={university}
            onChangeText={setUniversity}
            placeholder="มหาวิทยาลัย"
            style={styles.input}
          />

          <Text style={styles.label}>คณะ</Text>
          <TextInput
            value={faculty}
            onChangeText={setFaculty}
            placeholder="คณะ"
            style={styles.input}
          />

          <Text style={styles.label}>สาขา</Text>
          <TextInput
            value={major}
            onChangeText={setMajor}
            placeholder="สาขาวิชา"
            style={styles.input}
          />

          <Text style={styles.label}>ชั้นปี</Text>
          <TextInput
            value={year}
            onChangeText={setYear}
            placeholder="เช่น 4"
            keyboardType="number-pad"
            style={styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="your@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="อย่างน้อย 6 ตัวอักษร"
            secureTextEntry
            style={styles.input}
          />

          <AppButton
            title={loading ? 'กำลังสมัครสมาชิก...' : 'สร้างบัญชี ✨'}
            onPress={register}
            disabled={loading}
          />

          <View style={styles.backButton}>
            <AppButton
              title="กลับไปเข้าสู่ระบบ"
              variant="outline"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    flexGrow: 1,
    padding: 25,
    paddingTop: 50,
    paddingBottom: 50,
  },

  logo: {
    textAlign: 'center',
    fontSize: 52,
    color: theme.colors.primaryDark,
    marginBottom: 10,
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    color: theme.colors.text,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 8,
    marginBottom: 25,
  },

  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadow.card,
  },

  label: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: '#FCFAFF',
    paddingHorizontal: 16,
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 17,
  },

  backButton: {
    marginTop: 15,
  },
});