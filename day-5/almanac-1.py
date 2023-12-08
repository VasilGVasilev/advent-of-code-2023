seeds, *blocks = open(0).read().split("\n\n")

# turn str of digits into list(array) of numbers 
seeds = list(map(int, seeds.split(':')[1].split()))

for block in blocks:
    # store ranges
    ranges = []
    # remove the title line of each block
    for line in block.splitlines()[1:]:
        # take each of the three nums on line
        ranges.append(list(map(int, line.split())))
    # map over seeds but not manipulate directly
    new = []
    for seed in seeds:
        for a, b, c in ranges:
            if b <= seed < b + c:
                # offset of the seed from the rangeStart is to be added to the destination
                new.append(seed - b + a)
                break
        else:
            new.append(seed)
    values = new

print(min(values))