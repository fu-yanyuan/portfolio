import { animateScroll } from "react-scroll"

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => animateScroll.scrollToTop()}
      className="fixed bottom-7 right-5 text-4xl hover:-translate-y-4 duration-150">
      ⬆️
    </button>
  )
}

// import { Link as Scroll } from "react-scroll"

// export default function ScrollToTopButton() {
//   return (
//     <Scroll
//       // to='top' smooth duration={300}
//       className="fixed bottom-0 right-0 p-10 text-3xl cursor-pointer">
//       ⬆️👆
//     </Scroll>
//   )
// }