### Creating SSH keys

` ssh-keygen -t rsa -b 4096 -C  "subhadip1203@gmail.com" `
save the keys in : /Users/csuftitan/.ssh//.ssh/id_rsa_subhadip1203



` ssh-keygen -t rsa -b 4096 -C  "subhadipsjsc@gmail.com" `
save the keys in : /Users/csuftitan/.ssh/.ssh/id_rsa_subhadipsjsc




###  check all the files inside .ssh folder

`ls -al ~/.ssh`

### read the public key

`cat ~/.ssh/id_rsa_subhadip1203.pub`

and paste it in github "Settings" => "SSh & GPC keys"

### create config file in ~/.ssh folder

`cd ~/.ssh`

`touch config`

`nano config`

### add data in config file

```bash

# Personal account
Host github.com/subhadip1203
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_subhadip1203

# Office account
Host github.com/subhadipsjsc
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_subhadipsjsc

```


### Create git configuration files in the root folder 

`cd ~`

`nano .gitconfig`


```bash

# Personal account as default
[user]
  email = subhadip1203@gmail.com
  name = subhadip1203

# Work account in ~/Desktop/subhadipsjsc
[includeIf "gitdir:~/Desktop/subhadipsjsc/**"]
  path = "~/Desktop/subhadipsjsc/.gitconfig"

```

### create git configuration files in "~/Desktop/subhadipsjsc" folder

`cd ~/Desktop/subhadipsjsc`

`nano .gitconfig`

```bash

# Work account
[user]
  email = subhadipsjsc@gmail.com
  name = subhadipsjsc

```



### remove any existing identities by running the following command.

`cd ~`

`ssh-add -D`

### add new keys

`ssh-add -l`

### authenticate the keys with GitHub

ssh -T github.com/subhadip1203

ssh -T github.com/subhadipsjsc



### # Adds the relevant ssh key

`ssh-add ~/.ssh/id_rsa_subhadip1203`
