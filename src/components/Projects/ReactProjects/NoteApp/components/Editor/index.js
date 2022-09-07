import React from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"
import './index.scss'
import "react-mde/lib/styles/css/react-mde-all.css";
export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = React.useState("write")
    function loadSuggestions(text) {
        return new Promise((accept, reject) => {
          setTimeout(() => {
            const suggestions = [
              {
                preview: "Andre",
                value: "@andre"
              },
              {
                preview: "Angela",
                value: "@angela"
              },
              {
                preview: "David",
                value: "@david"
              },
              {
                preview: "Louise",
                value: "@louise"
              }
            ].filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()));
            accept(suggestions);
          }, 250);
        });
      }
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  
    const save = async function* (data) {
        // Promise that waits for "time" milliseconds
        const wait = function (time) {
          return new Promise((a, r) => {
            setTimeout(() => a(), time);
          });
        };
    }
    return (
        <section className='pane editor'>
            <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        loadSuggestions={loadSuggestions}
        childProps={{
          writeButton: {
            tabIndex: -1
          }
        }}
        paste={{
          saveImage: save
        }}
      />
        </section>
    )
}
