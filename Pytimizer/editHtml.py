import urllib.request
import os
from bs4 import BeautifulSoup

def creates_backup(file_name, content):
    fname = file_name.split(".")
    with open(f'{fname[0]}_BACKUP.{fname[1]}', "w") as f:
        f.write(str(content))

def changing_extensions (img):
    list_extensions = ['jpg', 'jpeg', 'png']
    img_src = img['src'].split(".")
    img_extension = img_src[-1]
    if list_extensions.count(img_extension):
        img_ext_index = img_src.index(img_extension)
        img_path = img_src[0:img_ext_index]
        img_path = ''.join(img_path)
        img['loading'] = 'lazy'
        img["src"] = f'.{img_path}.webp'
    else:
        img['loading'] = 'lazy'
    return img

def editHtml():
    with open("public\index.html", "r") as f:
        doc = BeautifulSoup(f, "html.parser")
        creates_backup("public\index.html", str(doc))
        
    for img in doc.find_all("img"):
        new_img = changing_extensions(img)
        img.replaceWith(new_img)

    with open('public\index.html', 'w') as f:
        f.write(str(doc))

editHtml()