from pathlib import Path
import zipfile

# A montagem anterior criou 12 conjuntos; usamos exatamente os 10 primeiros.
selecionadas = provas[:10]
assert len(selecionadas) == 10
assert all(len(p) == 20 for p in selecionadas)

base = Path("/mnt/data/provas_assistente_tecnologia")
base.mkdir(parents=True, exist_ok=True)

# Limpa apenas arquivos de provas previamente criados nesta execução.
for f in base.glob("prova_*.txt"):
    f.unlink()

for i, questoes in enumerate(selecionadas, 1):
    lines = [f"PROVA: Assistente de Tecnologia — Prova {i}", ""]
    for n, (q, alts, gab) in enumerate(questoes, 1):
        lines.append(f"{n}) {q}")
        lines.extend(alts)
        lines.append(f"GABARITO: {gab}")
        lines.append("")
    (base / f"prova_{i:02d}.txt").write_text("\n".join(lines), encoding="utf-8")

zip_path = Path("/mnt/data/provas_assistente_tecnologia_10_arquivos.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for f in sorted(base.glob("prova_*.txt")):
        z.write(f, arcname=f.name)

print("10 arquivos criados com sucesso.")
print("Cada arquivo contém 20 questões.")
print(f"ZIP criado: {zip_path}")
print("\nArquivos:")
for f in sorted(base.glob("prova_*.txt")):
    print(f"- {f.name}")
