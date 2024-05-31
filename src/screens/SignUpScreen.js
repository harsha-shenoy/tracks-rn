import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, signUp } = useContext(AuthContext);
  console.log(state);

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Text h3 style={{ marginBottom: 20 }}>
          {" "}
          Sign Up For Tracker{" "}
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

      {!state.errMsg ? null : (
        <Spacer>
          <Text style={styles.err}>{state.errMsg}</Text>
        </Spacer>
      )}

      <Spacer>
        <Button
          title="Sign Up"
          onPress={() =>
            signUp({ email, password }, () =>
              navigation.navigate("MainFlowTabNavigator")
            )
          }
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  err: {
    fontSize: 16,
    color: "red",
  },
});

export default SignUpScreen;
