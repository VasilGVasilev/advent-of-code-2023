# read and sanitized last empty row
lines = open(0).read().split("\n")
lines.pop()


for line in lines:
    line = line.split(':')[1]
    print(line)

