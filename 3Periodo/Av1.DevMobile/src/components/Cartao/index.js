import { Button, Image, Text, View } from "react-native";
import styles from "./styles";

export default function Cartao(props){
    return(
        <View style={styles.container}>
            <View style ={styles.viewImg}>
                <Image source={{
                    uri: props.cartao.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.classe}>Classe: {props.cartao.classe}</Text>
                <Text style={styles.nome}>Nome: {props.cartao.nome}</Text>
                <Text style={styles.descricao}>Lore: {props.cartao.descricao}</Text>
                <Text style={styles.ataque}>Ataque: {props.cartao.ataque}</Text>
                <Text style={styles.durabilidade}>Durabilidade: {props.cartao.durabilidade}</Text>
                <Button style={styles.btn} title="Realizar troca" color="#023020"/>
            </View>
        </View>
    );
}