# we will rely on the ascii logic that number are less than letters and make a dictionary to map the TJQKA to ABCDE

letter_map = {"T": "A", "J": "B", "Q": "C", "K": "D", "A": "E"}

def strength(hand):
    return (type(hand), [letter_map.get(char, char) for char in hand])

plays = []


for line in open(0):
    hand, bid = line.split()
    plays.append((hand, int(bid)))

plays.sort(key = lambda play: strength(play[0]))