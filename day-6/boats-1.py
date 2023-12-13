from functools import reduce
# read and sanitized last empty row
lines = open(0).read().split("\n")
lines.pop()



def getLineValues(line):
    line =  line.split(':')[1]
    return list(map(int, line.split()))


timesArr = getLineValues(lines[0])
distanceArr = getLineValues(lines[1])


# this will work if lines have same indices and length, I have no indication of not being so as per the explanation

def getEachRaceWinningCombinations(index, element):
    holdingBtnTimes = []
    for i in range(1, element + 1):
        if i * ((element) - i) > distanceArr[index]:
            holdingBtnTimes.append(i)
    return holdingBtnTimes

def multiplyWinningCombos(timesArr):
    allCombos = []
    for index, element in enumerate(timesArr):
        allCombos.append(len(getEachRaceWinningCombinations(index, element)))
    result = reduce(lambda x, y: x * y, allCombos)
    return result

print(multiplyWinningCombos(timesArr))