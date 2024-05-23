## Adjusts the markdown files to remove relative links
## Since we want all the files to be named after the module, this will make
## those adjustments.
find . -type d | while read dir; do
  # URL encode the file without spaces
ESCAPED_FILE=$(echo "$dir.md" | tail -c+3 | sed 's/ /-/g')
FILE=$(echo "$dir/globals.md")
  if [[ -e "$FILE" ]]
    then
      echo "Adjusting $FILE $ESCAPED_FILE"
      (cd "$dir" &&
      # Adjust all relative links back up to the root
      sed -E 's/\(\.\.\/(.+)(\/globals\.md)(.+)\)/(.\/\1\3)/g' globals.md |
      # Adjust all references to packages.md to HOME.md
      sed -E 's/\(..\/packages.md\)/(\.\/HOME)/g' |
      # Adjust all local references to new file name
      sed -E "s/\(globals\.md(.+)\)/(\.\/$ESCAPED_FILE)/g" >> "$dir.md"
      )
      (cd "$dir" && rm -rf globals.md index.md)
  fi
done
echo "END OF LINE"
