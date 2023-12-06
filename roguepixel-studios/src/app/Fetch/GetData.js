export default async function getData() {
    const res = await fetch(`https://randomuser.me/api?results=12&inc=name,email,phone,id,picture&nat=us,gb&seed=649dbe88b94100f6`)
    const data = await res.json();
    return data.results;
}
