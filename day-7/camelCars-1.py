# we will rely on the ascii logic that number are less than letters and make a dictionary to map the TJQKA to ABCDE

letter_map = {"T": "A", "J": "B", "Q": "C", "K": "D", "A": "E"}


def classify(hand): # deals with types, namely, repeating labels logic
    counts = [hand.count(card) for card in hand]

    if 5 in counts:
        return 6
    if 4 in counts:
        return 5
    if 3 in counts:
        if 2 in counts: # full house if a pair is also present ex. 33322
            return 4
        return 3 # three of a kind ex. 33321
    if counts.count(2) == 4: # we have two pairs
        return 2
    if 2 in counts:
        return 1
    return 0


def strength(hand):
    return (classify(hand), [letter_map.get(char, char) for char in hand])

plays = []


for line in open(0):
    hand, bid = line.split()
    plays.append((hand, int(bid)))

# sorts number first (rank based on type), sorts list second (if hands have same rank)
plays.sort(key = lambda play: strength(play[0]))

total = 0

for rank, (hand, bid) in enumerate(plays, 1):
    total += rank * bid

print(total)
