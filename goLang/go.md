### install golang
directly from go wesite

### check go environment variables

`go env`

check these 2 things : GOROOT & GOPATH

GOROOT : tells us where go runtime is installed (it comes with go installation)
current GOROOT without any change  =>  GOROOT="/usr/local/go"


GOPATH : where the local go projects lives (developer workspace)
current GOPATH without any change  =>  GOPATH="/Users/csuftitan/go"


### create our workspace for go

create a folder where we want to do our projects : 

project folder : /Users/csuftitan/Desktop/coding
inside project folder make 3 folders :
    /scr : all of our code
    /bin : all projects executables will live
    /pkg : all of teh packages and dependencies will be lived


### edit gopath in ~/.zshrc file  (for ubuntu ~/.bash_profile )

`nano ~/.zshrc`

 ```bash
export GOPATH=/Users/csuftitan/Desktop/coding/go_workspace
export PATH=$GOPATH/bin:$PATH
 ```

refreseh the .bash_profile : `source ~/.zshrc`