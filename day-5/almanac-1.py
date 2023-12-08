seeds, *blocks = open(0).read().split("\n\n")

# turn str of digits into list(array) of numbers 
seeds = list(map(int, seeds.split(':')[1].split())) 

print(seeds)
print(blocks)
