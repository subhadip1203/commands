
### Open Automator
find  Automator in mac search

Select Quick Action

### todos

search : Run Shell Script

workflow receives current : file or folder

Set the script action to the following

```bash

for f in "$@"; do
  open -a 'Visual Studio Code' "$@"
done

```

Set “Pass input” to as arguments

Save as `Open in Visual Studio Code`

