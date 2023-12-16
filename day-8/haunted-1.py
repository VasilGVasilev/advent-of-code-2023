lines = open(0).read().split("\n")
lines.pop()
lines = [x for x in lines if x != ''] # sanitize data

directions = list(lines[0])

nodes = lines[1:]
nodesAsSteps = list(map(lambda e: e[:3], nodes))
eachNodeDirections = list(map(lambda e: e[7:-1], nodes))

stepsDictionary = {} # Empty dictionary to add values into

for index, value in enumerate(nodesAsSteps):
   stepsDictionary[nodesAsSteps[index]] = eachNodeDirections[index]

print(stepsDictionary)

def steps(directions, nodes, nodesAsSteps):
    totalSteps = 0
    startingField = nodesAsSteps[0]
    fieldWeAreOn = ''

    while True:
        if fieldWeAreOn != 'ZZZ':
            for turn in directions:
                fieldWeAreOn = startingField
                possibleMoves = nodes.split(' = ')[1]
                leftOrRight = possibleMoves[1:-1].split(', ')
                leftDir = leftOrRight[0]
                rightDir = leftOrRight[1]
                print(fieldWeAreOn, leftDir, rightDir)

                if turn == 'L':
                    fieldWeAreOn = leftDir
                    totalSteps+=1
                if  turn == 'R':
                    fieldWeAreOn = rightDir
                    totalSteps+=1

        else:
            return totalSteps
    
print(steps(directions, nodes))

