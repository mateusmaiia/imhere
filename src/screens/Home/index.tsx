import { StatusBar } from "expo-status-bar";
import { Participant } from "../../comoponents/Participant";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com este nome."
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover participante", `Deseja remover o/a ${name}`, [
      {
        text: "Sim",
        onPress: () => {
          const newArrayAfterDeleteName = participants.filter(
            (participant) => participant !== name
          );
          setParticipants(newArrayAfterDeleteName);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={(e) => setParticipantName(e)}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
