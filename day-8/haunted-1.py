steps, _, *rest = open(0).read().splitlines() # since it is steps, \n, empty, \n, rest

network = {}

for line in rest:
    pos, targets = line.split(" = ")
    network[pos] = targets[1:-1].split(', ') #get rid of brackets

step_count = 0
# manually change for every input, far from ideal but working
current = "AAA"

while current != "ZZZ":
    step_count += 1

    # current = network[current][0 if steps[0] == "L" else 1]
    if steps[0] == "L":
        current = network[current][0] # cruical part is that you can update current by also using it as a 
    else:
        current = network[current][1]
    
    steps = steps[1:] + steps[0] #to reiterate steps if finishing them does not gives us current == "ZZZ"



print(step_count)


# most crucial step is to make an infinite steps loop
    # steps = steps[1:] + steps[0] 
# use a closure to count steps 
    # step_count = 0
# update current via accessing the network dictionary
    # current = network[current][0|1]