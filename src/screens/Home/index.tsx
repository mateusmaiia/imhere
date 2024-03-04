import { StatusBar } from "expo-status-bar";
import { Participant } from "../../comoponents/Participant";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";

export function Home() {
  function handleAddParticipant() {
    console.log("voce adicionou um novo partiicpante.");
  }

  const participants = [
    "maia",
    "mateus",
    "flourence",
    "hola",
    "lifeisgoood",
    "blabla",
    "joao",
    "luiz",
    "renan",
    "mccall",
    "mathews",
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant key={participant} name={participant} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
