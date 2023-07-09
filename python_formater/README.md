### set up virtual environment

create virtual environment : python3 -m venv env
activate virtual env and go inside virtual env : source env/bin/activate
deactivate : deactivate

# install black

pip install black

### create settings.json file inside .vscode folder

file : .vscode/settings.json

```
{
    "python.analysis.typeCheckingMode": "strict",
    "editor.formatOnSave": true,
    "python.formatting.provider": "none",
    "python.linting.enabled": true,
    "[python]": {
        "editor.defaultFormatter": "ms-python.black-formatter"
    }
}
```
