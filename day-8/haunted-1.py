steps, _, *rest = open(0).read().splitlines() # since it is steps, \n, empty, \n, rest

network = {}

for line in rest:
    pos, targets = line.split(" = ")
    network[pos] = targets[1:-1].split(', ') #get rid of brackets

print(network)