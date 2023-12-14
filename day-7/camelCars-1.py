def strength(hand):
    

plays = []



for line in open(0):
    hand, bid = line.split()
    plays.append((hand, int(bid)))

plays.sort(key = lambda play: strength(play[0]))