from convertImg import *
from editHtml import *


def init_optimize():
    while True:

        compress_img = (
            input("Deseja converter as images para webp? [S/N]").lower()[0]
        )
        if compress_img == "s":

            convert_all()
            print("Images convertidas! ", end="")
            change_html = (
                input("Deseja alterar tags img do seu HTML para webp? [S/N]")
                .lower()[0]
            )

            if change_html == "s":
                print("\nAlterando HTML...")
                editHtml()
            
            break
        elif compress_img == "n":
            while True:
                change_html = (
                    input("Deseja alterar tags img do seu HTML webp? [S/N]")
                    .lower()
                    .strip()[0]
                )
                if compress_img == "s":
                    editHtml()
                    break
                elif compress_img == "n":
                    print("\nResposta inválida, tente novamente!");
                    continue
        else:
            print("\nResposta inválida, tente novamente!")
            continue

    print("Volte sempre!")


init_optimize()
