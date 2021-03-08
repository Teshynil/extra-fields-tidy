const MODULE_NAME = "extra-fields-tidy";

Hooks.on("renderActorSheet", injectActorSheet);

function injectActorSheet(app, html, data) {
    let parent=html.find(".tab.biography .right-notes");
    const actor = app.actor;
    if(actor.data.data.details.height == undefined)actor.data.data.details.height={value:"",type:"ft"};
    if(actor.data.data.details.weight == undefined)actor.data.data.details.weight={value:"",type:"lb"};
    if(actor.data.data.details.age == undefined)actor.data.data.details.age="";
    parent.addClass("extra-fields-tidy");
    let element=`
    <div>
    <article class="extra-field">
    <div class="section-titles biopage">Height</div>
        <div class="value">
            <input name="data.details.height.value" type="text" value="`+actor.data.data.details.height.value+`" placeholder="2">
            <select name="data.details.height.type">
                <option value="ft" `+(actor.data.data.details.height.type=="ft"?"selected":"")+`>ft</option>
                <option value="m" `+(actor.data.data.details.height.type=="m"?"selected":"")+`>m</option>
            </select>
        </div>
    </article>
    <article class="extra-field">
    <div class="section-titles biopage">Weight</div>
        <div class="value">
            <input name="data.details.weight.value" type="text" value="`+actor.data.data.details.weight.value+`" placeholder="80">
            <select name="data.details.weight.type">
                <option value="lb" `+(actor.data.data.details.weight.type=="lb"?"selected":"")+`>lb</option>
                <option value="kg" `+(actor.data.data.details.weight.type=="kg"?"selected":"")+`>kg</option>
            </select>
        </div>
    </article>
    <article class="extra-field">
    <div class="section-titles biopage">Age</div>
        <div class="value">
            <input name="data.details.age" type="text" value="`+actor.data.data.details.age+`" placeholder="24">
        </div>
    </article>
    </div>
    `;
    let extrafield=$(element);
    parent.prepend(extrafield);
}
