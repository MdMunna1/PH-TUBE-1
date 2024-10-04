async function apiCalling() {
  let res = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  let deta = await res.json();
  btn(deta.categories);
}
apiCalling();
function btn(deta) {
  const btnSection = document.getElementById("btnSection");
  deta.forEach((element) => {
    let btn = document.createElement("button");
    btn.classList.add("btn", "m-2");
    btn.innerText = `${element.category}`;
    btnSection.append(btn);
  });
}
// * video section
async function apiCalling2() {
  let res = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/videos"
  );
  let deta = await res.json();
  video(deta.videos);
}

apiCalling2();

function video(video) {
  const videoId = document.getElementById("video");
  video.forEach((v) => {
    // console.log(v)
    console.log(v);

    let div = document.createElement("div");
    div.innerHTML = `
        <div class="h-[190px]">
                <img
                  class="rounded-md h-full w-full object-cover overflow-hidden"
                  src=${v.thumbnail}
                  alt="Shoes"
                />
              </div>
              <div class="mt-4 flex gap-4">
                <div><img class="h-8 w-8 rounded-full" src=${
                  v.authors[0].profile_picture
                } alt=""></div>
                <div>
                <h2 class="font-bold"> ${v.title}</h2>
                <div class="flex py-2 gap-2"><h5 class="text-xs ">${
                  v.authors[0].profile_name
                }</h5> ${
      v.authors[0].verified == true
        ? '<i class="text-blue-500 fa-solid fa-circle-check"></i>'
        :"" }</div>
                <p>${v.others.views} views
</p>
                </div>
               
            </div>
        
        `;
    videoId.append(div);
  });
}
