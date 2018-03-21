YELLOW="\x1b[33m"
RED='\033[0;31m'
NC='\033[0m'

print_title(){
  printf "${YELLOW}$1${NC}\n"
}

print_error(){
  printf "${RED}$1${NC}\n"
}

print(){
  printf "${YELLOW}$1${NC}\n"
}
print_title 2
print_error  'error'
your_name="qinjx"
greeting="hello, "$your_name" !"
greeting_1="hello, ${your_name} !"
test(){
	echo $greeting $greeting_1
}

array_name=(1 22 45)
echo ${#array_name[@]}
