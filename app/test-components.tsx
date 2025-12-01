import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, TextInput, TextInputBase, TextInputComponent, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container} >
      ...

      <Link href="/test-components" style={styles.link}>
        <Text style={styles.linkText}>Test Components</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    flex: 1,    justifyContent: "center",    alignItems: "center",  },
  link: {    margin: 10,    padding: 10,    backgroundColor: "#2196F3",    borderRadius: 5,  },
  linkText: {    color: "#fff",    fontSize: 16,    textAlign: "center",  },
});
<TextInputComponent
  keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}
  maxLength={30}
  multiline={false}
  placeholder="Please enter your email"
  returnKeyType="next"
  onChangeText={(text)=>{}}
  defaultValue="Default text"
/>
