import random

# Corrected dictionary with emojis
emojis = {
    "r": "🪨 Rock",
    "p": "📄 Paper",
    "s": "✂️ Scissors"
}

choices = ('r', 'p', 's')

while True:
    user_choice = input("Rock, Paper, or Scissors? (r/p/s): ").lower()

    if user_choice not in choices:
        print("❌ Invalid choice. Please choose r, p, or s.")
        continue

    computer_choice = random.choice(choices)

    print(f"\nYou chose: {emojis[user_choice]}")
    print(f"Computer chose: {emojis[computer_choice]}")

    if user_choice == computer_choice:
        print("🤝 It's a tie!")
    elif (
        (user_choice == "r" and computer_choice == "s") or 
        (user_choice == "p" and computer_choice == "r") or 
        (user_choice == "s" and computer_choice == "p")
    ):
        print("🎉 You win!")
    else:
        print("💻 Computer wins!")

    user_continue = input("\nDo you want to play again? (y/n): ").lower()
    if user_continue != 'y':
        print("👋 Thanks for playing!")
        break
