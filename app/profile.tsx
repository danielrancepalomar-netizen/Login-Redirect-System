import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import {
  useRouter,
  useLocalSearchParams,
} from "expo-router";

import { useEffect } from "react";

export default function Profile() {

  const router = useRouter();

  const { email, isLoggedIn } =
    useLocalSearchParams();

  useEffect(() => {
    if (isLoggedIn !== "true") {
      router.replace("/login");
    }
  }, []);

  return (

    <ImageBackground
      source={require("./bg.jpg")}
      resizeMode="cover"
      style={styles.bg}
    >

      <View style={styles.overlay}>

        <View style={styles.top}>

          <Text style={styles.logo}>
            Profile
          </Text>

          <TouchableOpacity
            onPress={() => router.replace("/login")}
          >
            <Text style={styles.logout}>
              Logout
            </Text>
          </TouchableOpacity>

        </View>


        <View style={styles.center}>

          <View style={styles.card}>

            <Text style={styles.title}>
              User Info
            </Text>

            <Text style={styles.label}>
              Email:
            </Text>

            <Text style={styles.value}>
              {email}
            </Text>


            <Text style={styles.label}>
              Status:
            </Text>

            <Text style={styles.value}>
              Logged in
            </Text>


            <TouchableOpacity
              style={styles.btn}
              onPress={() => router.back()}
            >
              <Text style={styles.btnText}>
                Back to Dashboard
              </Text>
            </TouchableOpacity>


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
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  logo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  logout: {
    color: "#ff7a18",
    fontWeight: "bold",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 250,
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 20,
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  label: {
    marginTop: 10,
  },

  value: {
    fontWeight: "bold",
  },

  btn: {
    marginTop: 20,
    backgroundColor: "#ff7a18",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
  },

});