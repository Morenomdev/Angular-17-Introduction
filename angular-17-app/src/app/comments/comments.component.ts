import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Commments anything</h3>
    <img
      src="https://imgs.search.brave.com/AS7hXtfxXDdGsyFru4EzrYaRGvwvA4MPlqXntgIZEFo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL3VwbG9hZHMv/Y2hvcnVzX2Fzc2V0/L2ZpbGUvNjQzODc5/My90aGlzLWlzLWZp/bmUuanBnP3F1YWxp/dHk9OTAmc3RyaXA9/YWxsJmNyb3A9OC4z/MzMzMzMzMzMzMzMz/LDAsODMuMzMzMzMz/MzMzMzMzLDEwMCZ3/PTI0MDA"
      alt="this if fine"
    />
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  `,
  styles: `
  img {
    width: 80px,
    height: auto
  }
  `,
})
export class CommentsComponent {}
