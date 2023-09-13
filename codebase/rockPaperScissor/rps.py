# Rock Paper and Scissor

import random

print("Welcome to the Rock, Paper and Scissor Game ")

options = ["rock","paper", "scissor"]
emoji= {
    "rock": "✊",
    "paper": "✋",
    "scissor": "✌️"
}

userCount = 0
compCount = 0
drawCount = 0

wantToPlay = True

while(wantToPlay):
    userChoice = input("Enter your choice from rock, paper and scissor : ").lower()
    compChoice = random.choice(options)

    while userChoice not in options:
        print("Invalid choice. Please enter 'rock', 'paper', or 'scissor'.")
        userChoice = input("Enter your choice from rock, paper and scissor : ").lower()

    print(f"You Choose : {emoji[userChoice]} {userChoice}")
    print(f"Computer Choose : {emoji[compChoice]}  {compChoice}")

    if (userChoice == compChoice):
        drawCount += 1
        print("It's a Draw!")

    elif ((userChoice == "rock" and compChoice == "scissor") or
        (userChoice == "paper" and compChoice == "rock") or
        (userChoice =="scissor" and compChoice == "paper")):
        userCount+=1
        print("You win this round!")

    else:
        compCount+=1
        print("Computer win this round!")
        

    print()
    print(f"User wins : {userCount} | Computer wins : {compCount} | Draws : {drawCount}")
    print()
    print("x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x")
    print()

    askUser = input("Do you want to play again? (yes or no) : ").lower()

    if askUser == "no" or askUser == "no":
        wantToPlay = False


