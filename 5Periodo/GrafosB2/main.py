#Alunos: Bruno Santos, Caio Ramalho, Lorenzo Venturini

import heapq
from collections import defaultdict


def inserir(adjacencia, v1, v2):
    adjacencia[v1].append(v2)


def imprime_lista(adjacencia, V):
    for i in range(V):                        #iterar por todos vertices do grafo
        print(i, end="")                      #imprime indice vertice atual
        for j in adjacencia[i]:               #iterar por vertices adjacentes
            print(" --> " + str(j), end="")   #imprime vertice adjacente
        print()                               #final da representacao de adjacencia do vertice i
    print()                                   #final de tudo


def converter(adjacencia, V):
    matriz = [[0 for j in range(V)] for i in range(V)] #cria matriz com 0 em todas as posições
    for i in range(V):                                 #iteracao pela matriz
        for j in adjacencia[i]:
            matriz[i][j] = 1                           #marca 1 para vertices adjacentes j e i
    return matriz                                      #matriz final


def imprime_matriz(adjacencia, V):
    for i in range(V):                         #linha da matriz no loop
        for j in range(V):                     #coluna da matriz no loop
            print(adjacencia[i][j], end=" ")   #valor da posicao [i][j]
        print()
    print()


def remove_aresta(adjacencia, v1, v2):
    for i in range(len(adjacencia[v1])): #itera pelos vertices adjacentes
        if adjacencia[v1][i] == v2:      #verifica se v2 é o destino
            adjacencia[v1].pop(i)        #Se for pra v2, exclui a aresta pelo 'pop'
            break                        #sai do loop
    for i in range(len(adjacencia[v2])): # se v2 vai pra v1 faz o mesmo
        if adjacencia[v2][i] == v1:
            adjacencia[v2].pop(i)
            break                        #fim do loop


def lista_adj_exercicio2(matriz): #visualizar quais vertices sao adjacentes
    lista_adjacencia = defaultdict(list)   #listas que guarda adjacencias
    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            if matriz[i][j] != 0:
                lista_adjacencia[i].append(j)
    return lista_adjacencia


def acessiblidade(matriz):  #define a matriz de acessibilidade
    R = matriz.copy()
    for i in range(len(R)):
        for j in range(len(R)):
            for k in range(len(R)):
                if R[i][k] == 1 and R[k][j] == 1: #conferir se sao adjacentes
                    R[i][j] = 1
    return R


def acessibilidade_warshall(matriz): #executa o codigo de warshall
    tamanho_matriz = len(matriz)
    R = matriz.copy()
    for k in range(tamanho_matriz):
        for i in range(tamanho_matriz):
            for j in range(tamanho_matriz):
                R[i][j] = R[i][j] or (R[i][k] and R[k][j])
    return R


# Algoritmo de Huffman


class vertice: #A frequência, a letra, o vértice esquerdo, o vértice direito, e a direção da árvore.
    def __init__(self, freq, letra, esq=None, dir=None):
        self.freq = freq
        self.letra = letra
        self.esq = esq
        self.dir = dir
        self.huffman = ''

    def __lt__(self, prox): #Frequências menores vão ser as primeiras
        return self.freq < prox.freq


def imprimir_vertice(vertice, valor=""):
    novo_valor = valor + str(vertice.huffman)
    if vertice.esq:
        imprimir_vertice(vertice.esq, novo_valor)
    if vertice.dir:
        imprimir_vertice(vertice.dir, novo_valor)
    if not vertice.esq and not vertice.dir:
        print(f"{vertice.letra} -> {novo_valor}")

def caractere_frequencia():
    """
    Pega o input da frequência de que é digitado, retorna duas tuplas, uma com o que foi digitado, e outra com a frequência.
    """
    caracteres = input("Digite as letras separadas por espaço: ").split()
    freq = input("Digite as frequências separadas por espaço: ").split()
    caracteres = [caracteres for caracteres in caracteres]
    freq = [int(freq_i) for freq_i in freq]
    return caracteres, freq

# Implementação

def menu():
    print("Qual exercicio?")
    print("1")
    print("2")
    print("3")
    print("4")
    print("5")
    print("6")
    op = input("Opção: ")
    return op


def main():
    op = menu()

    # Exercícios que envolvem input de lista de adjacência
    V = 5 # Vértice
    lista_adjacencia = [[] for i in range(V)]
    inserir(lista_adjacencia, 0, 1)
    inserir(lista_adjacencia, 0, 2)
    inserir(lista_adjacencia, 0, 3)
    inserir(lista_adjacencia, 1, 3)
    inserir(lista_adjacencia, 1, 2)
    inserir(lista_adjacencia, 2, 2)
    inserir(lista_adjacencia, 2, 0)

    # Exercícios que envolvem input de matriz
    matriz = [[0, 0, 0, 0],
              [0, 0, 0, 1],
              [1, 1, 0, 1],
              [1, 1, 0, 0]]

    if op == "1":
        """
        Exercicio 1, converte a lista de adjacência em uma matriz de adjacência com
        a função converter.
        """
        adjacencia_matriz = converter(lista_adjacencia, V)
        print("Matriz de adjacencia: ")
        imprime_matriz(adjacencia_matriz, V)

    elif op == "2":
        """
        Exercicio 2, converter matriz de adjacência em lista de adjacência
        """
        lista_adjacencia = lista_adj_exercicio2(matriz)
        print("Lista adjacencia: ")
        imprime_lista(lista_adjacencia, V)

    elif op == "3":
        """
        Exercicio 3, remove as arestas selecionadas
        """
        print("Lista de adjacencia: ")
        imprime_lista(lista_adjacencia, V)
        remove_aresta(lista_adjacencia, 1, 3) # Aresta 1 e 3 removida
        remove_aresta(lista_adjacencia, 2, 0) # Aresta 1 e 3 removida
        print("Lista após remoção: ")
        imprime_lista(lista_adjacencia, V)

    elif op == "4":
        """
        Exercicio 4, calcula a matriz de acessibilidade com R = A v A² v A³...A(n)
        """
        R = acessiblidade(matriz)
        imprime_matriz(matriz, len(matriz))

    elif op == "5":
        """
        Exercicio 5, calcula e imprime a matriz de acessibilidade usando Warshall.
        """
        R = acessibilidade_warshall(matriz)
        imprime_matriz(matriz, len(matriz))

    elif op == "6":
        """
        Exercício 6, comprime usando o algoritmo de Huffman.
        Chama a função do input, cria uma lista de vértices pra cada letra com frequência.
        Enquanto não sobrar um único vértice na lista vindo dos dois vértices com menor frequência,
        ele cria um novo vértice com os vértices filhos para a esquerda 0, e direita 1,
        que é impresso depois.
        """
        caracteres, freq = caractere_frequencia()
        vertices = []
        for i in range(len(caracteres)):
            heapq.heappush(vertices, vertice(freq[i], caracteres[i])) #cria lista de vértices
        while len(vertices) > 1:
            esq = heapq.heappop(vertices)
            dir = heapq.heappop(vertices)
            esq.huffman = 0
            dir.huffman = 1
            novo_vertice = vertice(esq.freq + dir.freq, esq.letra + dir.letra, esq, dir)
            heapq.heappush(vertices, novo_vertice)
        imprimir_vertice(vertices[0])


if __name__ == "__main__":
    main()