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

export default function Dashboard() {

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

          <View />

          <TouchableOpacity
            onPress={() => router.replace("/login")}
          >
            <Text style={styles.logout}>
              Logout
            </Text>
          </TouchableOpacity>

        </View>


        <View style={styles.center}>

          <Text style={styles.header}>
            DASHBOARD
          </Text>

          <Text style={styles.welcome}>
            Welcome {email}
          </Text>


          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/profile",
                params: {
                  email,
                  isLoggedIn: "true",
                },
              })
            }
          >
            <Text style={styles.cardText}>
              Go to Profile
            </Text>
          </TouchableOpacity>


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

  logout: {
    color: "#ff7a18",
    fontWeight: "bold",
    fontSize: 16,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  welcome: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },

  card: {
    width: 200,
    backgroundColor: "#ff7a18",
    padding: 15,
    margin: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  cardText: {
    color: "white",
    fontWeight: "bold",
  },

});