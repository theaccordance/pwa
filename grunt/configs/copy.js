module.exports = (grunt) => {
    return {
        cname: {
            src: ".github/pages/CNAME",
            dest: "www/CNAME"
        }
    }
};
