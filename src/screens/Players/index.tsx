import React, { useState } from "react";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList } from "react-native";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";

type RouteParams = {
    group: string;
}

export function Players() {
    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState([])
    const route = useRoute();
    const [newPlayerName, setNewPlayerName] = useState("")
    const { group } = route.params as RouteParams;

    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert("Nova pessoa", "Informe o nome da pessoa.");
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {

            await playerAddByGroup(newPlayer, group);
            const players = await playersGetByGroup(group);
            console.log(players);

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert("Nova pessoa", error.message);
            } else {
                console.log(error);
                Alert.alert("Nova pessoa", "Não foi possível adicionar.")
            }

        }

    }

    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title={group}
                subtitle="adicione a galera e separe os times"
            />

            <Form>
                <Input
                    onChangeText={setNewPlayerName}
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayer}
                />
            </Form>

            <HeaderList>
                <FlatList
                    data={["Time A", "Time B"]}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal={true}
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                )}
                ListEmptyComponent={() =>
                    <ListEmpty
                        message="Cadastre a primeira turma!"
                    />
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 }, // Quando chegar no ultimo jogador, tem um padding de 100
                    players.length === 0 && { flex: 1 } // Quando nao tiver jogadores, o ListEmpty ocupa tudo
                ]}
            />

            <Button
                title="Remover turma"
                type="SECONDARY"
            />

        </Container>
    )
}