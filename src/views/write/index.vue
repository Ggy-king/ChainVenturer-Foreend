<script setup>

defineOptions({
    name: 'WriteView'
})

import { computed, ref, onMounted, useTemplateRef } from 'vue';
import { Ckeditor, useCKEditorCloud } from '@ckeditor/ckeditor5-vue';

const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzcxNTgzOTksImp0aSI6IjQ0ZWYxMjM0LWZlM2UtNDg5NS1hZTAxLWVkMzZlODcyY2UzNSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjZkNmFmNGVhIn0.mdEBj-mvbKrIYKSHy5saENln1cP9SDYkT0Gudi8a-DMGGBvqixNCmhAAQmSNjs4OEgeTWSEk7GeQ6xcB7kRSaw';

const editorToolbar = useTemplateRef('editorToolbarElement');

const cloud = useCKEditorCloud({ version: '44.1.0', translations: ['zh-cn'] });

const isLayoutReady = ref(false);

const editor = computed(() => {
	if (!cloud.data.value) {
		return null;
	}

	return cloud.data.value.CKEditor.DecoupledEditor;
});

const config = computed(() => {
	if (!isLayoutReady.value) {
		return null;
	}

	if (!cloud.data.value) {
		return null;
	}

	const {
		Alignment,
		AutoImage,
		AutoLink,
		Autosave,
		BalloonToolbar,
		Base64UploadAdapter,
		BlockQuote,
		Bold,
		Code,
		Essentials,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		GeneralHtmlSupport,
		Heading,
		HorizontalLine,
		ImageBlock,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Italic,
		Link,
		List,
		Markdown,
		Paragraph,
		PasteFromOffice,
		Strikethrough,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TodoList,
		Underline
	} = cloud.data.value.CKEditor;

	return {
		toolbar: {
			items: [
				'heading',
				'|',
				'fontSize',
				'fontFamily',
				'fontColor',
				'fontBackgroundColor',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'code',
				'|',
				'horizontalLine',
				'link',
				'insertImage',
				'insertTable',
				'blockQuote',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
				'todoList'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			Alignment,
			AutoImage,
			AutoLink,
			Autosave,
			BalloonToolbar,
			Base64UploadAdapter,
			BlockQuote,
			Bold,
			Code,
			Essentials,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			GeneralHtmlSupport,
			Heading,
			HorizontalLine,
			ImageBlock,
			ImageInline,
			ImageInsert,
			ImageInsertViaUrl,
			ImageResize,
			ImageStyle,
			ImageToolbar,
			ImageUpload,
			Italic,
			Link,
			List,
			Markdown,
			Paragraph,
			PasteFromOffice,
			Strikethrough,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TodoList,
			Underline
		],
		balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
		fontFamily: {
			supportAllValues: true
		},
		fontSize: {
			options: [10, 12, 14, 'default', 18, 20, 22],
			supportAllValues: true
		},
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		htmlSupport: {
			allow: [
				{
					name: /^.*$/,
					styles: true,
					attributes: true,
					classes: true
				}
			]
		},
		image: {
			toolbar: ['imageTextAlternative', '|', 'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', '|', 'resizeImage']
		},
		initialData:
			'<h2>欢迎来看小高发文章🎉</h2>\n<p>\n\t可以写下所有你想写的文章，大展你身手，当然，可能我做的编辑器并不符合你的心意，当这也是无法避免的。毕竟我是打算练习更多的领域所以引入富文本编辑器，望客观谅解哦\n</p>\n<h3>接下来有做什么？</h3>\n<ol>\n\t<li>\n\t\t<strong>编辑好你的题目：</strong>起一个响亮点的名字\n\t</li>\n\t<li>\n\t\t<strong>开启你的创作之路：</strong>随意编辑\n</p>\n<h3>简单的介绍一下我</h3>\n<ul>\n\t<li>📝 高广源 计算机专业，</li>\n\t<li>📕 全栈工程师，基本没有不会的，</li>\n\t<li>⭐️ <a href="https://github.com/ggy">GitHub</a> 我的github点击跳转，</li>\n\t<li>🏠 展示秘密，</li>\n\t<li>🧑‍💻 A18581897806@outlook.com 我的邮箱</li>\n</ul>\n<h3>我的技术栈(怕吓到你)</h3>\n<p>\n\t我会Vue 2、Vue 3、router、vuex，Pinia、Less、Sass、React、HTML、CSS、JavaScript、es6+、ajax、Webpack、npm、pnpm、yarn、Node、Express、MongoDB、Apifox、Postman、antd、element-ui、vant、bootstrap、veevalidate、git husky eslint prettier、Ts、uniapp、echarts、Flutter、Web3、区块链技术、Svelte、Solid\n</p>\n',
		language: 'zh-cn',
		licenseKey: LICENSE_KEY,
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		placeholder: '请你尽情创作',
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
		}
	};
});

onMounted(() => {
	isLayoutReady.value = true;
});

function onReady(editor) {
	[...editorToolbar.value.children].forEach(child => child.remove());

	editorToolbar.value.appendChild(editor.ui.view.toolbar.element);
}
</script>

<template>
  <div class="write">
    <div class="main-container">
      <div class="editor-container editor-container_document-editor" ref="editorContainerElement">
        <div class="editor-container__toolbar" ref="editorToolbarElement"></div>
        <div class="editor-container__editor-wrapper">
          <div class="editor-container__editor">
            <div ref="editorElement">
              <ckeditor v-if="editor && config" :modelValue="config.initialData" :editor="editor" :config="config" @ready="onReady" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');


.write {
  width: 1200px;
  height: 1000px;
}
.main-container {
	font-family: 'Lato';
	width: 100%;
	margin-left: auto;
	margin-right: auto;
}

.ck-content {
	font-family: 'Lato';
	line-height: 1.8;
	word-break: break-word;
}
// :deep(.ck-toolbar) {
//   background-color: red;
//   color: #ae782c;

// }
:deep(.ck-toolbar__items) {
  font-size: 17px;
}

.editor-container__editor-wrapper {
	display: flex;
	width: fit-content;
}

.editor-container_document-editor {
	border: 1px solid #ae782c;
}

.editor-container_document-editor .editor-container__toolbar {
	display: flex;
	position: relative;
	box-shadow: 0 2px 3px hsla(0, 0%, 0%, 0.078);
  // background-color: red;

}

.editor-container_document-editor .editor-container__toolbar > .ck.ck-toolbar {
	flex-grow: 1;
	width: 0;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
	border-top: 0;
	border-left: 0;
	border-right: 0;
}
// #89939e
.editor-container_document-editor .editor-container__editor-wrapper {
	max-height: 4000px;
	min-height: 800px;
  width: 100%;
  margin: 0;
	background: var(--ck-color-base-foreground);
}

.editor-container_document-editor .editor-container__editor {
	margin-top: 28px;
	margin-bottom: 28px;
	height: 100%;
}

.editor-container_document-editor .editor-container__editor .ck.ck-editor__editable {
	box-sizing: border-box;
	min-height: 220mm;
	width: 1050px;
	height: fit-content;
	padding: 0 8mm;
	border: 1px hsl(0, 0%, 82.7%) solid;
	background: hsl(0, 0%, 100%);
	box-shadow: 0 2px 3px hsla(0, 0%, 0%, 0.078);
	flex: 1 1 auto;
	margin-left: 72px;
	margin-right: 72px;
}


</style>
