content=$(cat $1)
echo $content

b=${content//'${time}'/`date +%Y%m%d%H`}

echo $b

 
