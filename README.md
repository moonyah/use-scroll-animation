# use-scroll-animation

`use-scroll-animation`은 스크롤 애니메이션을 간편하게 구현할 수 있는 React 훅입니다. 이 훅을 사용하면 부드러운 스크롤 효과를 손쉽게 적용할 수 있어 사용자 경험이 더욱 향상됩니다.

## 설치

`npm` 또는 `yarn`을 사용하여 패키지를 설치할 수 있습니다.

### npm

```bash
npm install use-scroll-animation
```

### 사용법

1. 패키지를 `import`합니다.
2. `useSmoothScroll` 훅을 사용하여 스크롤 애니메이션을 구현합니다.

```typescript
import React from "react";
import useSmoothScroll from "use-scroll-animation";

const App: React.FC = () => {
  const { currentSection, scrollToSection } = useSmoothScroll(1000);

  return (
    <div>
      <div id="section1" style={{ height: "100vh" }}>
        Section 1
      </div>
      <div id="section2" style={{ height: "100vh" }}>
        Section 2
      </div>
      <div id="section3" style={{ height: "100vh" }}>
        Section 3
      </div>

      <button onClick={() => scrollToSection(0)}>Scroll to Section 1</button>
      <button onClick={() => scrollToSection(1)}>Scroll to Section 2</button>
      <button onClick={() => scrollToSection(2)}>Scroll to Section 3</button>

      <p>Current Section: {currentSection}</p>
    </div>
  );
};

export default App;
```

### API

`useSmoothScroll(duration: number = 1000)`

- `duration`: 스크롤 애니메이션의 지속 시간 (기본값: 1000ms)

#### 반환값

- `currentSection`: 현재 스크롤된 섹션의 인덱스
- `scrollToSection(index: number)`: 특정 섹션으로 스크롤 이동

### Contributing

기여를 원하시면, [기여 가이드라인](https://github.com/moonyah/use-scroll-animation/blob/main/CONTRIBUTING.md)을 확인하세요.

### License

MIT License. 자세한 내용은 [LICENSE](https://github.com/moonyah/use-scroll-animation/blob/main/LICENSE)파일을 확인하세요.
