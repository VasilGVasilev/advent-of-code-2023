lines = open(0).read().split("\n")
lines.pop()
lines = [x for x in lines if x != ''] # sanitize data

directions = lines[0]

nodes = lines[1:]

print(directions, nodes)