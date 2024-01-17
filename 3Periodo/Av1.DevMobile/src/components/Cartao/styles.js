import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    btn: {
        padding: 20,
    },
    viewImg: {
        width: '30%',
        height: 150,
        padding: 5
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData: {
        padding: 10,
        width: '70%',
        height: '100%',
        backgroundColor: '#714109',
        borderRadius: 10
    },
    classe: {
        fontSize: 18,
        color: '#d6c9a6',
        fontWeight: 'bold',
        marginBottom: 5
    },
    nome: {
        fontSize: 18,
        color: '#c4a484',
        marginBottom: 5
    },
    ataque: {
        fontSize: 14,
        color: '#d6c9a6', 
        marginBottom: 5
    },
    durabilidade: {
        fontSize: 14,
        color: '#d6c9a6',
        marginBottom: 5
    },
    descricao: {
        fontSize: 14,
        color: '#c4a484',
        fontWeight: 'bold',
        marginBottom: 2
    },
      
});
export default styles;