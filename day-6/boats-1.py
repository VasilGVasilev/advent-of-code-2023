# read and sanitized last empty row
lines = open(0).read().split("\n")
lines.pop()



def getLineValues(line):
    line =  line.split(':')[1]
    return list(map(int, line.split()))


timesArr = getLineValues(lines[0])
distanceArr = getLineValues(lines[1])


# this will work if lines have same indices and length, I have no indication of not being so as per the explanation


for element in timesArr:
    print(element)