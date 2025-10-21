import Container from "../components/shared/Container";

export default function About() {
  return (
    <section className="py-10">
      <Container>
        <div>
          <h2 className="text-2xl font-bold pb-4">About Page</h2>
          <div className="text-xl font-semibold text-gray-400">
            <p className="pb-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and comes from a line in section 1.10.32 here are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you
            </p>
            <p className="pb-5">
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..",
            </p>
            <p>
              are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
