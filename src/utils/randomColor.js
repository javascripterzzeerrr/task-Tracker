export default function randomColor() {
    const colors = ["#9400D3", "#c5a804", "#099e2e", "#039dcc", "#a00854", "#F19CBB", "#FBCEB1"];

    const random = () => {
        return Math.floor(Math.random() * (colors.length + 1));
    };

    return colors[random()];
}