package main

import (
	"bufio"
	"fmt"
	"os"
	"test/utils" // Pastikan untuk mengganti 'your_project_name' dengan nama modul Anda
)

func main() {
	// Read input from user
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Masukkan sebuah kalimat: ")
	input, _ := reader.ReadString('\n')

	input = input[:len(input)-1]

	// call function from utils.go
	longestWord, length := utils.Longest(input)
	fmt.Printf("%s %d character\n", longestWord, length)
}
