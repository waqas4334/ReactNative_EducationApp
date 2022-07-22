import { Card, ListItem, Button, Icon, Text, Switch } from "react-native-elements";
import { StyleSheet, View } from "react-native";

import React, { useState } from "react";

const Cards = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
  const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
  return (
    <>
      <Card containerStyle={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Card containerStyle={styles.subCard}>
            <View style={styles.switch}>
              <Text style={styles.Headingtext}> Hybrid Geyser 1</Text>
              <View style={styles.switchButton}>
                <Switch onValueChange={toggleSwitch} value={isEnabled} trackColor={{ true: "teal", false: "#ff0000" }} color="teal" />
              </View>
            </View>

            <Text style={styles.subheading}>Temperature: 15C</Text>
            <Text style={styles.subheading}>Mode: Hybrid</Text>
            <Text style={styles.subheading}>Routine: On</Text>
          </Card>
          <Card containerStyle={styles.subCard}>
            <View style={styles.switch}>
              <Text style={styles.Headingtext}> Hybrid Geyser 2</Text>
              <Switch onValueChange={toggleSwitch1} value={isEnabled1} trackColor={{ true: "orange", false: "#ff0000" }} color="orange" />
            </View>

            <Text style={styles.subheading}>Temperature: 20C</Text>
            <Text style={styles.subheading}>Mode: Electric</Text>
            <Text style={styles.subheading}>Routine: Off</Text>
          </Card>
          <Card containerStyle={styles.subCard}>
            <View style={styles.switch}>
              <Text style={styles.Headingtext}> Hybrid Geyser 3</Text>
              <Switch onValueChange={toggleSwitch2} value={isEnabled2} trackColor={{ true: "coral", false: "#ff0000" }} color="coral" />
            </View>

            <Text style={styles.subheading}>Temperature: 15C</Text>
            <Text style={styles.subheading}>Mode: Hybrid</Text>
            <Text style={styles.subheading}>Routine: On</Text>
          </Card>
        </View>
      </Card>
      <Card containerStyle={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Card containerStyle={styles.subCard}>
            <View style={styles.switch}>
              <Text style={styles.Headingtext}> Hybrid Geyser 1</Text>
              <View style={styles.switchButton}>
                <Switch onValueChange={toggleSwitch} value={isEnabled} trackColor={{ true: "teal", false: "#ff0000" }} color="teal" />
              </View>
            </View>

            <Text style={styles.subheading}>Temperature: 15C</Text>
            <Text style={styles.subheading}>Mode: Hybrid</Text>
            <Text style={styles.subheading}>Routine: On</Text>
          </Card>
          <Card containerStyle={styles.subCard}>
            <View style={styles.switch}>
              <Text style={styles.Headingtext}> Hybrid Geyser 2</Text>
              <Switch onValueChange={toggleSwitch1} value={isEnabled1} trackColor={{ true: "orange", false: "#ff0000" }} color="orange" />
            </View>

            <Text style={styles.subheading}>Temperature: 20C</Text>
            <Text style={styles.subheading}>Mode: Electric</Text>
            <Text style={styles.subheading}>Routine: Off</Text>
          </Card>
          <Card containerStyle={styles.subCard}>
            <View style={styles.switch}>
              <Text style={styles.Headingtext}> Hybrid Geyser 3</Text>
              <Switch onValueChange={toggleSwitch2} value={isEnabled2} trackColor={{ true: "coral", false: "#ff0000" }} color="coral" />
            </View>

            <Text style={styles.subheading}>Temperature: 15C</Text>
            <Text style={styles.subheading}>Mode: Hybrid</Text>
            <Text style={styles.subheading}>Routine: On</Text>
          </Card>
        </View>
      </Card>

      <Card containerStyle={styles.container2}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Card containerStyle={styles.subCard2}>
            <View style={styles.switch}>
              <Text style={styles.Headingtext2}> Hybrid Geyser 4</Text>
              <Switch onValueChange={toggleSwitch3} value={isEnabled3} color="#272B2E" />
            </View>

            <Text style={styles.subheading2}>Temperature:15C</Text>
            <Text style={styles.subheading2}>Mode:Hybrid</Text>
            <Text style={styles.subheading2}>Routine:On</Text>
          </Card>
          <Card containerStyle={styles.subCard2}>
            <View style={styles.switch}>
              <Text style={styles.Headingtext2}> Hybrid Geyser 5</Text>
              <Switch onValueChange={toggleSwitch4} value={isEnabled4} color="#272B2E" />
            </View>

            <Text style={styles.subheading2}>Temperature:20C</Text>
            <Text style={styles.subheading2}>Mode:Electric</Text>
            <Text style={styles.subheading2}>Routine:Off</Text>
          </Card>
          <Card containerStyle={styles.subCard2}>
            <View style={styles.switch}>
              <Text style={styles.Headingtext2}> Hybrid Geyser 6</Text>
              <Switch onValueChange={toggleSwitch5} value={isEnabled5} color="#272B2E" />
            </View>

            <Text style={styles.subheading2}>Temperature:15C</Text>
            <Text style={styles.subheading2}>Mode:Hybrid</Text>
            <Text style={styles.subheading2}>Routine:On</Text>
          </Card>
        </View>
      </Card>
    </>
  );
};
export default Cards;
const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 2,
    borderWidth: 0,
    borderColor: "blue",
  },
  container2: {
    marginTop: "5%",
    backgroundColor: "#272B2E",
    borderRadius: 10,
  },
  subCard: {
    backgroundColor: "#272B2E",
    borderRadius: 15,
    width: "30%",
    height: 150,

    borderWidth: 0,
    borderColor: "transparent",
    elevation: 10,
  },
  subCard2: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "30%",
    height: 150,

    borderWidth: 0,
    borderColor: "transparent",
    elevation: 0,
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  switchButton: {
    marginTop: -10,
  },
  Headingtext: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  Headingtext2: {
    color: "#272B2E",
    fontSize: 18,
    fontWeight: "bold",
  },
  subheading2: {
    fontSize: 16,
    color: "#272B2E",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
