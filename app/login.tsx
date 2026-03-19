import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {

    if (!email || !password) return;

    setIsLoggedIn(true);

    router.replace({
      pathname: "/dashboard",
      params: {
        email,
        isLoggedIn: "true",
      },
    });

  };

  return (

    <ImageBackground
      source={require("./bg.jpg")}
      resizeMode="cover"
      style={styles.bg}
    >

      <View style={styles.overlay}>

        <View style={styles.row}>

          <View style={styles.left}>

            <Text style={styles.big}>
              Welcome{"\n"}Back
            </Text>

            <Text style={styles.desc}>
              Login to continue using the app
            </Text>

          </View>

          <View style={styles.right}>

            <Text style={styles.sign}>
              Sign in
            </Text>

            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#ccc"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              style={styles.btn}
              onPress={handleLogin}
            >
              <Text style={styles.btnText}>
                Sign in now
              </Text>
            </TouchableOpacity>

            <Text style={styles.forgot}>
              Lost your password?
            </Text>

          </View>

        </View>

      </View>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({

  bg: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    padding: 40,
  },

  left: {
    flex: 1,
    justifyContent: "center",
  },

  right: {
    flex: 1,
    justifyContent: "center",
  },

  big: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },

  desc: {
    color: "white",
    marginTop: 10,
  },

  sign: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  btn: {
    backgroundColor: "#ff7a18",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  forgot: {
    color: "white",
    marginTop: 10,
  },

});